import LoadingIcon from "../../shared/components/LoadingIcon";
import { useLabels } from "../hooks/useLabels";

interface LabelPickerProps {
  selectedLabels: string[];
  onChange: (label: string) => void;
}
export const LabelPicker: React.FC<LabelPickerProps> = ({ selectedLabels, onChange }) => {
  const { labelsQuery } = useLabels();

  // el isLoading,a diferencia del isFetching es cuando estoy cargando la data por primera vez,si ya tengo data en caché no se dispara,por eso queremos el isLoading para el spinner
  if (labelsQuery.isLoading) return <LoadingIcon />;

  return (
    <>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${
            selectedLabels.includes(label.name) ? "label-active" : ""
          }`}
          style={{ border: `1px solid #${label.color}`, color: `${label.color}` }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </>
  );
};

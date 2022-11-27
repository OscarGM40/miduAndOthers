import { useState } from "react";
import LoadingIcon from "../../shared/components/LoadingIcon";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useIssues } from "../hooks/useIssues";

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const onLabelChange = (labelName: string) => {
    // si incluye el name lo quito,si no lo agrego
    selectedLabels.includes(labelName)
      ? setSelectedLabels([...selectedLabels.filter((l) => l !== labelName)])
      : setSelectedLabels([...selectedLabels, labelName]);
  };

  const { issuesQuery } = useIssues();

  return (
    <div className="row mt-5">
      <div className="col-8">
        {
          issuesQuery.isLoading 
            ? <LoadingIcon /> 
            : <IssueList issues={issuesQuery.data || []} />
        }
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => onLabelChange(labelName)}
        />
      </div>
    </div>
  );
};

import { useState } from "react";
import LoadingIcon from "../../shared/components/LoadingIcon";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useIssues } from "../hooks/useIssues";
import { State } from "../interfaces/issue";

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state,setState] = useState<State>()

  const onLabelChange = (labelName: string) => {
    // si incluye el name lo quito,si no lo agrego
    selectedLabels.includes(labelName)
      ? setSelectedLabels([...selectedLabels.filter((l) => l !== labelName)])
      : setSelectedLabels([...selectedLabels, labelName]);
  };

  const { issuesQuery } = useIssues({state,labels:selectedLabels});

  return (
    <div className="row mt-5">
      <div className="col-8">
        {issuesQuery.isLoading ? (
          <LoadingIcon />
        ) : (
          <IssueList
            issues={issuesQuery.data || []}
            state={state}
            onStateChanged={(newState) => setState(newState)}
          />
        )}
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

import { InfoAlert } from '@/features/orgs/components/InfoAlert';
import { FiAlertTriangle } from 'react-icons/fi';

function RestoreRecommendationNote() {
  return (
    <InfoAlert icon={<FiAlertTriangle className="h-[38px] w-[38px]" />}>
      <p className="!leading-[1.5]">
        We recommend importing the backup to a different project first to ensure
        everything works as expected before applying it to this project.
      </p>
    </InfoAlert>
  );
}

export default RestoreRecommendationNote;

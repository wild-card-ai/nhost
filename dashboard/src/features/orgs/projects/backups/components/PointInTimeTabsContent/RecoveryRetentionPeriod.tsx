import { InfoAlert } from '@/features/orgs/components/InfoAlert';
import { FiClock } from 'react-icons/fi';

function RecoveryRetentionPeriod() {
  return (
    <InfoAlert
      title="Recovery retention period"
      icon={<FiClock className="h-[38px] w-[38px]" />}
    >
      Database changes are retained for up to 7 days, allowing restoration to
      any point within this period.
    </InfoAlert>
  );
}

export default RecoveryRetentionPeriod;

import { InfoAlert } from '@/features/orgs/components/InfoAlert';
import { FiDatabase } from 'react-icons/fi';

function PiTRNotEnabledOnSourceProject() {
  return (
    <InfoAlert
      title="Point-in-Time Recovery is not enabled on the selected project"
      icon={<FiDatabase className="h-[38px] w-[38px]" />}
    >
      Importing from scheduled backups is not supported yet. Coming soon!
    </InfoAlert>
  );
}

export default PiTRNotEnabledOnSourceProject;

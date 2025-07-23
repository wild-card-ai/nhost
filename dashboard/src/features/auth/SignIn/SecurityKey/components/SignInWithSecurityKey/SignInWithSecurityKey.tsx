import { Button } from '@/components/ui/v3/button';
import { useSignInWithSecurityKey } from '@/features/auth/SignIn/SecurityKey/hooks/useSignInWithSecurityKey';
import { FiUnlock } from 'react-icons/fi';
import { useState } from 'react';
import { VerifyEmailDialog } from './VerifyEmailDialog';

function SignInWithSecurityKey() {
  const [open, setOpen] = useState(false);
  function onNeedsEmailVerification() {
    setOpen(true);
  }
  const { disabled, signInWithSecurityKey } = useSignInWithSecurityKey({
    onNeedsEmailVerification,
  });
  return (
    <>
      <VerifyEmailDialog open={open} setOpen={setOpen} />
      <Button
        variant="ghost"
        className="gap-2 !bg-white text-sm+ !text-black hover:ring-2 hover:ring-white hover:ring-opacity-50 disabled:!text-black disabled:!text-opacity-60"
        disabled={disabled}
        onClick={signInWithSecurityKey}
      >
        <FiUnlock size={14} />
        Continue with a security key
      </Button>
    </>
  );
}

export default SignInWithSecurityKey;

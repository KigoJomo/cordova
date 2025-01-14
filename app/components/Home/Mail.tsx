import { MoveRight } from 'lucide-react';
import { FC } from 'react';

interface MailProps {
  dark?: boolean;
}

const Mail: FC<MailProps> = ({ dark = false }) => {
  return (
    <div className={`w-full md:w-2/5 py-4`}>
      <p className="text-xs md:text-sm mb-6">
        Cordova is grateful for the snowy environments that bring about our
        wildest imaginations and greatest adventures. We believe that preserving
        these environments means preserving the opportunity to enjoy the moments
        we spend in them.
      </p>

      <MailInput dark={dark} />
    </div>
  );
};

export default Mail;

const MailInput: FC<MailProps> = ({ dark = false }) => {
  return (
    <form
      className={`w-full ${
        dark ? '*:text-background' : ''
      } flex flex-col md:flex-row md:items-end gap-4`}>
      <div className="input w-full">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className={`w-full outline-none border-b ${
            dark ? 'border-background' : 'border-foreground'
          } bg-transparent`}
        />
      </div>

      <button
        type="submit"
        className={`w-full md:w-fit h-fit px-4 py-1 flex items-center justify-center gap-4 border bg-transparent  ${
          dark
            ? 'border-background hover:bg-background hover:text-foreground'
            : 'border-foreground hover:bg-foreground hover:text-background'
        } rounded-full transition-all duration-300`}>
        <span>Subscribe</span>
        <MoveRight size={16} />
      </button>
    </form>
  );
};

export { MailInput };

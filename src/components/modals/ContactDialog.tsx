import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, Loader2 } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { useTranslation } from '@/lib/i18n';

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const { t, r } = useTranslation();

  const schema = z.object({
    name: z.string().min(3, t.contactDialog.nameError),
    objective: z.string().min(1, t.contactDialog.objectiveError),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const message = t.whatsapp.leadMessage(data.name, data.objective, r.brandName);
    openWhatsApp(message);
    reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-gray-900">
            {t.contactDialog.title}
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            {t.contactDialog.description}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              {t.contactDialog.nameLabel}
            </label>
            <input
              {...register('name')}
              type="text"
              autoComplete="name"
              placeholder={t.contactDialog.namePlaceholder}
              className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${
                errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              {t.contactDialog.objectiveLabel}
            </label>
            <select
              {...register('objective')}
              className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-gray-50 ${
                errors.objective ? 'border-red-400 bg-red-50' : 'border-gray-200'
              }`}
            >
              <option value="">{t.contactDialog.objectivePlaceholder}</option>
              {t.contactDialog.objectives.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            {errors.objective && (
              <p className="text-red-500 text-xs mt-1">{errors.objective.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 text-base gap-2 rounded-xl"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <MessageCircle className="w-5 h-5" />
            )}
            {t.contactDialog.btnSubmit}
          </Button>

          <p className="text-xs text-gray-400 text-center">{t.contactDialog.privacy}</p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

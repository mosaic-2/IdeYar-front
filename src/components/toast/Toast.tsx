import {
  useNotifications,
  NotificationsProvider,
} from "@toolpad/core/useNotifications";
import { useEffect } from "react";

interface Props {
  type: "success" | "error" | "warning" | "info";
  description: string;
  onClose: () => void;
}

const ToastBody = ({ type, description, onClose }: Props) => {
  const notifications = useNotifications();

  useEffect(() => {
    const key = notifications.show(description, {
      severity: type,
      autoHideDuration: 3000,
    });

    const timer = setTimeout(() => {
      notifications.close(key);
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
      notifications.close(key);
    };
  }, [description, notifications, onClose, type]);

  return null;
};

const Toast = ({ type, description, onClose }: Props) => {
  return (
    <NotificationsProvider>
      <ToastBody type={type} description={description} onClose={onClose} />
    </NotificationsProvider>
  );
};

export default Toast;

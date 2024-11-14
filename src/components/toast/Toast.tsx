import {
  useNotifications,
  NotificationsProvider,
} from "@toolpad/core/useNotifications";
import { useEffect } from "react";
interface Props {
  type: "success" | "error" | "warning" | "info";
  disabled: boolean;
  discription: string;
}
const ToastBody = ({ type, disabled, discription }: Props) => {
  const notifications = useNotifications();
  useEffect(() => {
    const key = !disabled
      ? notifications.show(discription, {
          severity: type,
          autoHideDuration: 3000,
        })
      : "";
    return () => {
      notifications.close(key);
    };
  });
  return <></>;
};

const Toast = ({ type, disabled, discription }: Props) => {
  return (
    <NotificationsProvider>
      <ToastBody type={type} disabled={disabled} discription={discription} />
    </NotificationsProvider>
  );
};
export default Toast;

interface Props {
    onFundChange?: (fund: string) => void;
    onDateChange?: (fund: string) => void;
    onSubmit?: () => void;
    creating: boolean;
}
declare const DetailsPart: ({ onFundChange, onDateChange, onSubmit, creating, }: Props) => import("react/jsx-runtime").JSX.Element;
export default DetailsPart;

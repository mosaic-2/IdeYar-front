import React from "react";
interface FundModalProps {
    open: boolean;
    handleClose: () => void;
    id: number;
}
declare const FundModal: React.FC<FundModalProps>;
export default FundModal;

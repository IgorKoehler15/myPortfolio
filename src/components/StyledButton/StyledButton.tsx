import { styled } from "@mui/material";
import type { ReactNode } from "react"; // ✅ importa só como type

interface StyledButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
    const StyledBtn = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "middle",
        gap: "10px",
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        border: `1px solid  ${theme.palette.primary.contrastText}`,
        color: theme.palette.primary.contrastText,
        cursor: "pointer",
        transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), " +
            "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), " +
            "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), " +
            "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    }));

    return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
};

export default StyledButton;

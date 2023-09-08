import { useNavigate } from "react-router-dom";

export default function usePageBack() {

    const navigate = useNavigate();
    const goBack = () => navigate("..", { relative: "path" });

    return { goBack }
}
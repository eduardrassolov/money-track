import { useSearchParams } from 'react-router-dom'

export default function usePagination() {
    const moveToPage = (page: number) => {
        setParams((params) => {
            params.set("page", String(page));
            return params;
        });
    }

    const [params, setParams] = useSearchParams();
    const currPage = Number(params.get("page"));

    return { currPage, moveToPage }
}

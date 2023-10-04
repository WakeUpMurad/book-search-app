import axios from "axios";

const DEFAULT_PARAMS = {
    key: "AIzaSyBfPxAUt4A1zpmU1AxDtsiWaWyAYqQQP6g"
};

const instance = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export const googleBooksAPI = {
    getBooksList({searchTerms, pageNumber, pageSize, sortingMethod, categories}: SearchingOptions) {
        const startIndex = (pageNumber - 1) * pageSize;

        const params = {
            ...DEFAULT_PARAMS,
            startIndex: startIndex,
            orderBy: sortingMethod,
            maxResults: pageSize,
        };

        return instance.get<GetBooksListResponse>(`?q=${searchTerms}${categories !== "all" ? `+subject:${categories}` : ""}`, {params})
            .then(res => res.data);
    },
    getBook(bookId: string) {
        return instance.get<VolumeResource>(`/${bookId}`, {params: DEFAULT_PARAMS})
            .then(res => res.data)
    }
};




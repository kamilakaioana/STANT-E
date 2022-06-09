import { ISearchData } from "../hooks/search";
import { IBook } from "../interfaces";

export const encodeFileBase64 = async (file: File | undefined) => {
  var reader = new FileReader();
  if (file) {
    await reader.readAsDataURL(file);
    reader.onload = () => {
      var Base64 = reader.result;
      return Base64 ?? "";
    };

    reader.onerror = (error) => {
      console.log("error: ", error);
    };
  }
  return (reader.result as string) ?? "";
};

export const filterByTitle = (data: IBook[], query: string): IBook[] => {
  const title = query.toLowerCase();
  const booksFiltered = data.filter((item) =>
    item.title.toLowerCase().includes(title)
  );
  return booksFiltered;
};

export const filterBooks = (data: IBook[], query: ISearchData): IBook[] => {
  const title = query?.title?.toLowerCase();
  const author = query?.author?.toLowerCase();
  let books = data;
  if (!title && !author) return data;
  if (title && !author) {
    books = books.filter((item) => item.title.toLowerCase().includes(title));
    return books;
  }
  if (!title && author) {
    books = books.filter((item) => item.author.toLowerCase().includes(author));
    return books;
  }
  if (author && title) {
    books = books
      .filter((item) => item.author.toLowerCase().includes(author))
      .filter((item) => item.title.toLowerCase().includes(title));
  }
  return books ?? [];
};

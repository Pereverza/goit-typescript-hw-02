import { useState, useEffect, useCallback } from "react";
import { Toaster } from "react-hot-toast";
import { fetchImagesFromUnsplash } from "./unsplash-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { UnsplashImage, UnsplashApiResponse } from "./types";

function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image: UnsplashImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, [setSelectedImage]);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedImages = await fetchImagesFromUnsplash(query, page);
        const fetchedData: UnsplashApiResponse = fetchedImages;
        setImages((prevImages) => [...prevImages, ...fetchedData.results]);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError("Something went wrong. Try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" reverseOrder={false} />

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}

      {isLoading && <Loader />}

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onRequestClose={handleCloseModal}
          imageUrl={selectedImage.urls?.regular}
          alt={
            selectedImage.alt_description || "Image description not available"
          }
        />
      )}

      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}

export default App;

import Image from "next/image";
import Link from "next/link";

const fetchGalleryImages = async () => {
  return fetch("https://picsum.photos/v2/list?page=2&limit=10").then((res) =>
    res.json()
  );
};

export const metadata = {
  title: "Gallery",
  description: "A simple image gallery",
};

const Gallery = async () => {
  const images = await fetchGalleryImages();
  console.log(images);
  return (
    <div>
      <h1>Gallery</h1>
      <div className="mx-auto flex justify-center gap-4 flex-wrap">
        {images.map(
          ({
            id,
            author,
            download_url,
          }: {
            author: string;
            download_url: string;
            height: number;
            id: string;
            url: string;
            width: number;
          }) => (
            <div
              key={id}
              className="bg-gray-200 w-[300px] flex items-center justify-center"
            >
              <Link href={`/gallery/${id}`} className="w-full h-full">
                <Image
                  src={download_url}
                  alt={author}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Gallery;

import Image from "next/image";
import Link from "next/link";

const fetchGalleryItem = async (id: string) => {
  return fetch(`https://picsum.photos/id/${id}/info`).then((res) => res.json());
};

type Props = {
  params: Promise<{ id: string }>;
};

const Gallery = async ({ params }: Props) => {
  const { id } = await params;
  const image = await fetchGalleryItem(id);

  return (
    <div className="flex items-center justify-center">
      <div className="p-3">
        <div>
          <Link href="/gallery">Go Back</Link>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={image.download_url}
            alt={image.author}
            width={image.width}
            height={image.height}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

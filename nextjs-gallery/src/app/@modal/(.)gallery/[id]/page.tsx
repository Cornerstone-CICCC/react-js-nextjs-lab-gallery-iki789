import Image from "next/image";
import Modal from "./Modal";

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
    <Modal id={id}>
      <Image
        src={image.download_url}
        alt={image.author}
        width={image.width}
        height={image.height}
      />
    </Modal>
  );
};

export default Gallery;

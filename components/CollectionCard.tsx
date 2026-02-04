import Image from "next/image";
import { Suspense } from "react";
import Loading from "./Loading";
import placeHolder from '../public/placeholder.png';

interface Props {
    className?: string;
    collectionId: number;
}

const CollectionCard = ( params:Props ) => {
    return (
        <div className={params.className}>
            <Suspense fallback={<Loading />}>
                <Image
                    src={placeHolder}
                    alt={`Collection ${params.collectionId}`}
                    className="rounded-lg"
                />
                <h4>Collection {params.collectionId}</h4>
            </Suspense>
        </div>
    )
}

export default CollectionCard;
import { jacquard24 } from "@/fonts/fonts";
import CollectionCard from "./CollectionCard";

const Collections = () => {
    return (
        <section className="min-h-[80dvh]">
            <h2 className={`${jacquard24.className} text-3xl m-4`}>collections</h2>
            <div className="flex flex-row flex-wrap gap-4 align-middle justify-center">
                <CollectionCard collectionId={1} className="w-100"></CollectionCard>
                <CollectionCard collectionId={1} className="w-100"></CollectionCard>
                <CollectionCard collectionId={1} className="w-100"></CollectionCard>
                <CollectionCard collectionId={1} className="w-100"></CollectionCard>
                <CollectionCard collectionId={1} className="w-100"></CollectionCard>
            </div>
        </section>
    )
}

export default Collections;
import styles from "~/styles/carousel.css";
import fileNames from "~/data/photos";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <div className="horizontal-snap">
      {fileNames.map((filename, idx) => {
        return (
          <div key={idx}>
            <img
              src={`/photos/${filename}`}
              alt={`Madelyn and Phil ${filename}`}
              className="carousel-image"
            />
          </div>
        );
      })}
    </div>
  );
}

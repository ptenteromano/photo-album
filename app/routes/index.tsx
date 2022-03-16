import { LoaderFunction, useLoaderData } from "remix";
import styles from "~/styles/carousel.css";
import fs from "fs";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader: LoaderFunction = () => {
  const testFolder = "public/photos/";

  const fileNames: Array<string> = [];
  fs.readdirSync(testFolder).forEach((file) => {
    fileNames.push(file);
  });

  return fileNames;
};

export default function Index() {
  const fileNames = useLoaderData<Array<string>>();
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

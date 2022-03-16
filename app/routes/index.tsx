import styles from "~/styles/carousel.css";
import fs from "fs";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

// export function loader() {
//   return null;
// }

export default function Index() {
  return (
    <div className="horizontal-snap">
      <div>
        <img src="FullSizeRender.HEIC" alt="test1" />
      </div>
      <div>
        <img src="https://picsum.photos/id/122/640/640" alt="test1" />
      </div>
      <div>
        <img src="https://picsum.photos/id/188/640/640" alt="test1" />
      </div>
      <div>
        <img src="https://picsum.photos/id/249/640/640" alt="test1" />
      </div>
      <div>
        <img src="https://picsum.photos/id/257/640/640" alt="test1" />
      </div>
      <div>
        <img src="https://picsum.photos/id/259/640/640" alt="test1" />
      </div>
      <div>
        <img src="https://picsum.photos/id/283/640/640" alt="test1" />
      </div>
      <div>
        <img src="https://picsum.photos/id/288/640/640" alt="test1" />
      </div>
      <div>
        <img src="https://picsum.photos/id/299/640/640" alt="test1" />
      </div>
    </div>
  );
}

import articleIllustration from "../../images/illustration-article.svg";
import avatarImage from "../../images/image-avatar.webp";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export function Card() {
  return (
    <article className="flex flex-col items-start w-full max-w-384 bg-white p-24 rounded-card border border-black shadow-card transition-shadow hover-device:hover:shadow-card-hover">
      <LazyLoadImage
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Blog post illustration"
        src={articleIllustration}
        effect="opacity"
        draggable="false"
        wrapperClassName="mb-24 relative w-full aspect-[16/10] rounded-image overflow-hidden"
      />
      <a
        className="mb-12 rounded-tag bg-yellow px-12 py-4 text-tag-sm text-black xs:text-tag-lg transition-colors hover-device:hover:bg-black hover-device:hover:text-yellow"
        href="/"
      >
        Learning
      </a>
      <p className="mb-12 text-date-sm text-black xs:text-date-lg">
        Published 21 Dec 2023
      </p>
      <a className="mb-12 block text-title-sm text-black xs:text-title-lg transition-colors hover-device:hover:text-yellow" href="/">
        <h2>HTML & CSS foundations</h2>
      </a>
      <p className="mb-24 text-description-sm text-grey xs:text-description-lg">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <a href="/" className="flex justify-start items-center gap-12 text-black transition-colors hover-device:hover:text-yellow">
        <LazyLoadImage
          alt="Greg Hooper profile picture"
          src={avatarImage}
          effect="opacity"
          draggable="false"
          width={32}
          height={32}
        />
        <p className="text-author-sm xs:text-author-lg">Greg Hooper</p>
      </a>
    </article>
  );
}

export default Card;

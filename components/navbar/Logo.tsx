import React from "react";

const Logo: React.FC = () => {
  return (
    <a
      href="/"
      className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 rounded-sm"
      aria-label="Realtors World Home"
    >
      {/* 
        logo.svg embedded inline with a responsive width/height of 6vw.
        The path is translated down by 36.5px to align its visual center with the geometric center of the viewBox,
        ensuring perfect vertical centering.
      */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1254 1254"
        className="text-white transition-colors duration-200 shrink-0"
        style={{
          width: "6vw",
          height: "6vw",
          minWidth: "48px",
          minHeight: "48px",
        }}
      >
        <path
          d="M 626 160 L 847 289 L 982 371 L 981 522 L 933 522 L 932 396 L 627 217 L 322 395 L 320 397 L 319 460 L 272 459 L 272 370 L 625 161 Z M 565 327 L 617 327 L 617 379 L 565 379 L 564 328 Z M 637 327 L 688 327 L 688 379 L 636 379 L 636 328 Z M 604 398 L 617 398 L 617 450 L 564 449 L 564 399 L 603 399 Z M 640 398 L 689 399 L 688 450 L 636 450 L 636 399 L 639 399 Z M 280 485 L 457 486 L 491 492 L 509 498 L 537 513 L 564 538 L 588 575 L 649 752 L 697 614 L 724 546 L 778 546 L 840 720 L 853 751 L 857 744 L 922 549 L 981 549 L 878 856 L 829 857 L 761 666 L 752 642 L 749 639 L 673 856 L 625 857 L 596 778 L 541 613 L 532 593 L 522 579 L 509 566 L 497 558 L 467 548 L 445 545 L 336 545 L 334 547 L 335 671 L 432 671 L 458 666 L 478 655 L 495 637 L 501 620 L 500 596 L 510 607 L 528 644 L 534 665 L 536 683 L 517 702 L 483 721 L 585 857 L 508 857 L 414 729 L 335 729 L 334 857 L 272 857 L 272 486 L 279 486 Z"
          fill="currentColor"
          fillRule="evenodd"
          transform="translate(0, 36.5)"
        />
      </svg>
      <span className="font-display text-base sm:text-[28px] font-bold tracking-tight text-white leading-[1.08] flex flex-col justify-center">
        <span>Realtors</span>
        <span>World</span>
      </span>
    </a>
  );
};

export default Logo;

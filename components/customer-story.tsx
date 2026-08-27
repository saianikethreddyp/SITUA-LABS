import Aperture from "./aperture";

export default function CustomerStory() {
  return (
    <section className="section container-site">
      <p className="eyebrow reveal">
        <Aperture className="w-[14px] h-[15px] flex-none text-signal" />
        One business / many moments
      </p>

      <h2 className="mt-8 text-2xl measure-md reveal">
        Your customer sees one business.
      </h2>

      <p className="body-copy mt-10 reveal">
        They don&apos;t separate your website from your follow-up, or your
        promise from what happens after they say yes. They judge all of it by
        whichever part failed them last.
      </p>

      <p className="body-copy mt-5 reveal">
        Customer experience design can mean reworking a website, keeping
        follow-up moving, or giving the team better service tools.
      </p>
    </section>
  );
}

import SocialCards from "@/components/SocialCards";

export default function ContactWindow() {
  return (
    <div className="p-4">
      <div className="xp-h1">Get in touch</div>
      <p className="xp-p">Open to collaborations, hackathons and interesting problems.</p>
      <p className="xp-p">
        <b>Email:</b> rehan5.azim@gmail.com &nbsp;|&nbsp; <b>Phone:</b> +91 8600175623 &nbsp;|&nbsp;{" "}
        <b>Location:</b> Pune, India
      </p>
      <div className="xp-h2">Find me online</div>
      <SocialCards />
    </div>
  );
}

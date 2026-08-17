import SocialCards from "@/components/SocialCards";

export default function ContactWindow() {
  return (
    <div className="p-4">
      <div className="xp-h1">Get in touch</div>
      <div className="xp-p font-semibold whitespace-pre-line mb-3">
        Got an idea? A project? Or just wanna talk tech?{"\n"}
        Let’s build something cool together. 🚀{"\n"}
        Drop me a message — I’m always down for interesting conversations, collaborations, and crazy ideas.
      </div>
      <p className="xp-p">
        <b>Email:</b> rehan5.azim@gmail.com &nbsp;|&nbsp; <b>Phone:</b> +91 8600175623 &nbsp;|&nbsp;{" "}
        <b>Location:</b> Pune, India
      </p>
      <div className="xp-h2">Find me online</div>
      <SocialCards />
    </div>
  );
}

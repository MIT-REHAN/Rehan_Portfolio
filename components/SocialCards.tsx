import { SOCIALS } from "@/lib/data";
import { Icon } from "@/components/icons";

export default function SocialCards() {
  return (
    <div className="flex gap-2.5 flex-wrap mt-2.5">
      {SOCIALS.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[130px] bg-[#f6f8fd] border border-[#c7d4ee] hover:bg-[#e2ecff] hover:border-[#0a3faa] rounded-md p-2.5 flex items-center gap-2.5 no-underline text-[#111] transition-colors"
        >
          <span className="flex-none w-[30px] h-[30px] rounded overflow-hidden">
            <Icon name={s.icon} size={30} />
          </span>
          <span>
            <span className="block text-[11.5px] font-bold">{s.name}</span>
            <span className="block text-[10px] text-[#555]">{s.handle}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

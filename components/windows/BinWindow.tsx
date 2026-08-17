import { Icon } from "@/components/icons";

export default function BinWindow() {
  return (
    <div className="p-4">
      <div className="xp-h1">Recycle Bin</div>
      <div className="xp-p text-[#777]">2 items</div>
      <div className="flex gap-2 py-2 border-b border-dashed border-[#dce3f0]">
        <Icon name="resume" size={26} />
        <div>
          <b className="text-[11.5px]">old_resume_v1.doc</b>
          <div className="text-[10px] text-[#888]">Deleted before switching to Deaf Link Innovations</div>
        </div>
      </div>
      <div className="flex gap-2 py-2 border-b border-dashed border-[#dce3f0]">
        <Icon name="notepad" size={26} />
        <div>
          <b className="text-[11.5px]">excuses_for_not_shipping.txt</b>
          <div className="text-[10px] text-[#888]">Permanently deleted — replaced with 20+ shipped projects</div>
        </div>
      </div>
    </div>
  );
}

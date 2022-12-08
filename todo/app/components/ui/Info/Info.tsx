const Info = () => {
  return (
    <div className="flex justify-between mt-[65px]">
      <div>
        <span className="text-[#4EA8DE] font-bold mr-[8px]">Tarefas criadas</span>
        <span
          className="bg-[#333333] rounded-[999px] py-[2px] px-[8px]
        text-[#D9D9D9] font-bold text-[12px]"
        >
          0
        </span>
      </div>
      <div>
        <span className="text-[#8284FA] font-bold mr-[8px]">Concluídas</span>
        <span
          className="bg-[#333333] rounded-[999px] py-[2px] px-[8px]
        text-[#D9D9D9] font-bold text-[12px]"
        >
          0
        </span>
      </div>
    </div>
  );
};

export default Info;

import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import Tasks from "../../ui/Tasks/Tasks";

const Main = () => {
  return (
    <main className="w-screen">
      <div className="mx-auto max-w-[736px]">
        <div className="flex gap-[8px] mt-[-27px]">
          <Input />
          <Button svg="add">Criar</Button>
        </div>
        <Tasks />
      </div>
    </main>
  );
};

export default Main;

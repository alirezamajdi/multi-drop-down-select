import SelectBox from "../components/select-box/index";

const Index = () => {
  return (
    <div className="p-4">
      <SelectBox
        items={[
          "Education 🎓",
          "Yeeeah, science! 👨‍🎓",
          "Art 🎭",
          "Sport ⚽",
          "Games 🎮",
          "Health 🏥",
        ]}
        onChange={(value) => console.log("ccc", value)}
      />
    </div>
  );
};

export default Index;

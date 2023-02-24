import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "../Recoil/atom";

const Converter = () => {
  const [minute, setMinute] = useRecoilState(minuteState);
  const [hour, setHour] = useRecoilState(hourSelector);
  const onChangeMinute = (event: React.FormEvent<HTMLInputElement>) => {
    setMinute(+event.currentTarget.value);
  };
  const onChangeHour = (event: React.FormEvent<HTMLInputElement>) => {
    setHour(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minute}
        onChange={onChangeMinute}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hour}
        onChange={onChangeHour}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
};

export default Converter;

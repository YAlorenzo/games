import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export enum SlotLifecycle {
  READY_TO_START = "start",
  PLAY = "play",
  STOPPING = "stopping",
  STOP = "stop",
  INFO = "info",
}

export interface ISlotRow {
  id: number;
  activeItemID: number;
}

export enum SlotWinOrLose {
  WIN = "win",
  LOSE = "lose",
}

interface ISlot {
  lifecycle: `${SlotLifecycle}`;
  rows: ISlotRow[];
  winOrLose: `${SlotWinOrLose}` | null;
  currentBet: number;
  slotReadyToStart: boolean;
}
const initialState: ISlot = {
  lifecycle: SlotLifecycle.READY_TO_START,
  rows: [
    {
      id: 1,
      activeItemID: 7,
    },
    {
      id: 2,
      activeItemID: 7,
    },
    {
      id: 3,
      activeItemID: 7,
    },
  ],
  winOrLose: null,
  currentBet: 0,
  slotReadyToStart: true,
};

const slotSlice = createSlice({
  initialState,
  name: "slot",
  reducers: {
    setSlotLifecycle: (state, action: PayloadAction<SlotLifecycle>) => {
      state.lifecycle = action.payload;
    },
    startSlot: (state) => {
      state.lifecycle = SlotLifecycle.PLAY;
      state.rows = state.rows.map((row) => ({
        ...row,
        activeItemID: Math.ceil(Math.random() * 12),
      }));
      const arrayActiveItemsID = state.rows.map((row) => row.activeItemID);
      const firstItem = arrayActiveItemsID[0];

      const win = arrayActiveItemsID.every((elem) => elem === firstItem);
      state.winOrLose = win ? SlotWinOrLose.WIN : SlotWinOrLose.LOSE;
    },
    setSlotCurrentBet: (state, action: PayloadAction<number>) => {
      if (state.currentBet + action.payload < 0) {
        state.currentBet = 0;
      } else {
        state.currentBet = state.currentBet + action.payload;
      }
    },
    setSlotRefreshBet: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.currentBet = 0;
      }
    }
  },
});

export const { setSlotLifecycle, startSlot, setSlotCurrentBet, setSlotRefreshBet} = slotSlice.actions;

export const selectSlotLifecycle = (state: RootState) => state.slot.lifecycle;
export const selectSlotRows = (state: RootState) => state.slot.rows;
export const selectSlotCurrentBet = (state: RootState) => state.slot.currentBet;
export const selectSlotWinOrLose = (state: RootState) => state.slot.winOrLose;
// export const selectSlotRefreshBet = (state: RootState) => state.slot.

export default slotSlice.reducer;

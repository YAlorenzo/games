import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export enum RouletteLifecycle {
  READT_TO_START = "start",
  PLAY = "play",
  FINISHED = "finished",
  INFO = "info",
}

export enum RouletteWinOrLose {
  WIN = "win",
  LOSE = "lose",
}

interface InitialState {
  readonly winBet: number;
  lifecycle: `${RouletteLifecycle}`;
  winOfLose: `${RouletteWinOrLose}` | null;
  activeNumber: number | null;
  currentBet: number;
  numberReady: boolean;
  betReady: boolean;
  modalSettingsActive: boolean;
}

const initialState: InitialState = {
  winBet: 36,
  lifecycle: RouletteLifecycle.READT_TO_START,
  winOfLose: null,
  activeNumber: null,
  currentBet: 0,
  numberReady: true,
  betReady: true,
  modalSettingsActive: false,
};

const rouletteSlice = createSlice({
  initialState,
  name: "roulette",
  reducers: {
    setActiveNumber: (state, action: PayloadAction<number>) => {
      state.activeNumber = action.payload;
    },
    setCurrentBet: (state, action: PayloadAction<number>) => {
      if (state.currentBet + action.payload < 0) {
        state.currentBet = 0;
      } else {
        state.currentBet = state.currentBet + action.payload;
      }
    },
    setRouletteLifecycle: (state, action: PayloadAction<RouletteLifecycle>) => {
      state.lifecycle = action.payload;
    },
    setRouletteWinOrLose: (
      state,
      action: PayloadAction<RouletteWinOrLose | null>
    ) => {
      state.winOfLose = action.payload;
    },
    clearRoulette: (state) => {
      state.activeNumber = null;
      state.currentBet = 0;
    },
    setRouletteNumberReady: (state, action: PayloadAction<boolean>) => {
      state.numberReady = action.payload;
    },
    setRouletteBetReady: (state, action: PayloadAction<boolean>) => {
      state.betReady = action.payload;
    },
    setRouletteRefreshBet: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.currentBet = 0;
      }
    },

    setModalSettingsActive: (state) => {
      state.modalSettingsActive = !state.modalSettingsActive;
    },
  },
});

export const {
  setActiveNumber,
  setCurrentBet,
  setRouletteLifecycle,
  setRouletteWinOrLose,
  clearRoulette,
  setRouletteBetReady,
  setRouletteNumberReady,
  setRouletteRefreshBet,
  setModalSettingsActive,
} = rouletteSlice.actions;

export const selectActiveNumber = (state: RootState) =>
  state.roulette.activeNumber;
export const selectCurrentBet = (state: RootState) => state.roulette.currentBet;
export const selectRouletteLifecycle = (state: RootState) =>
  state.roulette.lifecycle;
export const selectRouletteWinBet = (state: RootState) => state.roulette.winBet;
export const selectRouletteWinOrLose = (state: RootState) =>
  state.roulette.winOfLose;
export const selectRouletteNumberReady = (state: RootState) =>
  state.roulette.numberReady;
export const selectRouletteBetReady = (state: RootState) =>
  state.roulette.betReady;
export const selectModalSettingsActive = (state: RootState) =>
  state.roulette.modalSettingsActive;

export default rouletteSlice.reducer;

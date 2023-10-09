import { fork, all } from "redux-saga/effects";
import { productDetailsSaga, productDetailsSaveSaga } from "../../services/ProductDetails/sagas";

const sagas = [
  productDetailsSaga,
  productDetailsSaveSaga
  // NOTE: put other app sagas here
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;

import { keyboard } from "@testing-library/user-event/dist/keyboard";

const PATH = "http://prototype.path";

function handleErrorStatus(response) {
  console.log(response);
  throw new Error(" returned error response status: " + response.status);
}

export async function postNewMemo() {
  try {
    const response = await fetch(`${PATH}/memos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) handleErrorStatus(response);

    const memoData = await response.json();
    return memoData;
  } catch (err) {
    console.log(err);
  }
}

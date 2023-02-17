import { setActivePinia, createPinia } from "pinia";
import useUserStore from "@/stores/user";

/*  
    mock firebase modules
*/
vi.mock("@/includes/firebase", () => ({
  getAuth: () => Promise.resolve(),
  signInWithEmailAndPassword: () => Promise.resolve(),
}));

describe("stores", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("authenticates user", async () => {
    const store = useUserStore();

    expect(store.userLoggedIn).not.toBe(true);
    await store.authenticate({});
    expect(store.userLoggedIn).toBe(true);
  });
});

import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '89247a88742beae4e61307f66852731e0b20f02e', queries,  });
export default client;
  
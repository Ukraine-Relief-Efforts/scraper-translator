import { handler } from "../handlers/scraper-translation.js";
import { mock } from "../mocks/scheduled-event.js";

await handler(mock, null);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original, self-contained one-liner: the landlord's "character" turns out
// to be a ghost — who, unlike the tenant, pays no rent.
const LINE =
  "My landlord raised the rent: the apartment has \"character\" — a ghost who pays no rent.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), LINE, "utf8");

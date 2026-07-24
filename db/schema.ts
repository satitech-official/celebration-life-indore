import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  eventType: text("event_type").notNull(),
  eventDate: text("event_date"),
  budgetRange: text("budget_range"),
  location: text("location"),
  selectedPackage: text("selected_package"),
  message: text("message"),
  preferredContact: text("preferred_contact").notNull().default("phone"),
  source: text("source").notNull().default("website"),
  status: text("status").notNull().default("new"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

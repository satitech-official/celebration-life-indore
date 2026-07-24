CREATE TABLE `leads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`email` text,
	`event_type` text NOT NULL,
	`event_date` text,
	`budget_range` text,
	`location` text,
	`selected_package` text,
	`message` text,
	`preferred_contact` text DEFAULT 'phone' NOT NULL,
	`source` text DEFAULT 'website' NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);

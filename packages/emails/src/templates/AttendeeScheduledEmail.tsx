import type { CalendarEvent, Person } from "@calcom/types/Calendar";

import { BaseScheduledEmail } from "./BaseScheduledEmail";

export const AttendeeScheduledEmail = (
  props: {
    calEvent: CalendarEvent;
    attendee: Person;
  } & Partial<React.ComponentProps<typeof BaseScheduledEmail>>
) => {
  const firstName = props.attendee?.name?.trim().split(/\s+/)[0];
  const welcomeTitle = firstName
    ? `You're all set, ${firstName} — your consultation with Sunset Services U.S. is confirmed.`
    : "You're all set — your consultation with Sunset Services U.S. is confirmed.";

  const closingContent = (
    <table
      role="presentation"
      cellPadding="0"
      cellSpacing="0"
      style={{ width: "100%", borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          <td align="left" style={{ padding: "10px 25px 24px 25px", wordBreak: "break-word" }}>
            <div
              style={{
                fontFamily: "Roboto, Helvetica, sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "22px",
                color: "#2C2C2C",
              }}>
              <p style={{ margin: "0 0 16px 0" }}>
                If anything changes before your appointment, just reply to this email and we&apos;ll be glad
                to help. We&apos;re looking forward to learning about your project and showing you what
                thoughtful, well-built outdoor living can look like. Your outdoor space deserves a partner who
                treats it like a craft, and that&apos;s exactly what we&apos;ll bring.
              </p>
              <p style={{ margin: 0 }}>
                Warm regards,
                <br />
                <strong style={{ color: "#2C2C2C" }}>The Sunset Services U.S. Team</strong>
                <br />
                <span style={{ fontSize: "13px", color: "#2E4F4F" }}>Craft Your Outdoor Legacy</span>
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <BaseScheduledEmail
      locale={props.attendee.language.locale}
      timeZone={props.attendee.timeZone}
      t={props.attendee.language.translate}
      timeFormat={props.attendee?.timeFormat}
      {...props}
      titleOverride={welcomeTitle}
      hideSubtitle
      closingContent={closingContent}
    />
  );
};

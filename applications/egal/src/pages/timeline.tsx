import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import { mockEvents } from '@legavee/data/conveyancing-events';
import { renderIcon } from '@legavee/components/event-list/event-list';
import moment from 'moment'
export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      {
        mockEvents.map((item,index) => {
          return (
            <TimelineItem key={`timeline-item-${index}`}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                className='text-white'
              >
                {
                  moment(item.date).format('MM/DD/YYYY')
                }
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  {renderIcon(item)}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <div className="whitespace-nowrap py-4 text-sm text-gray-500">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {item.status}
                      </span>
                </div>
                <Typography variant="h6" component="span">
                  {item.type}
                </Typography>
                <Typography>{item.summary}</Typography>
              </TimelineContent>
            </TimelineItem>
          )
        })
      }
    </Timeline>
  );
}
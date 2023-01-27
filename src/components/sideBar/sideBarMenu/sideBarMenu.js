import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import Button from '@mui/material/Button';

export default function SideBarMenu() {
  
  const IconsList = [
    { icon: <RssFeedIcon />, name: "Feed" },
    { icon: <ChatIcon />, name: "Chats" },
    { icon: <PlayCircleIcon />, name: "Videos" },
    { icon: <GroupsIcon />, name: "Groups" },
    { icon: <BookmarkIcon />, name: "Bookmarks" },
    { icon: <HelpIcon />, name: "Questions" },
    { icon: <WorkIcon />, name: "Jobs" },
    { icon: <EventIcon />, name: "Events" },
    { icon: <SchoolIcon />, name: "Courses" },
  ];

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <>
        <List>
          {IconsList.map((item) => (
            <ListItem disablePadding className="SideBarMenu">
              <ListItemButton color="black" >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
            
          ))}
        </List>
      </>
    </Box>
  );
}

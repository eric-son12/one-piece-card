import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  SpeedDial,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { InfiniteMovingCards } from "./components/infinite-moving-cards";

import "./App.css";

interface BoxCard {
  imgSrc: string;
  name: string;
  quatity: string;
  price: string;
  label: string;
}

interface Card {
  imgSrc: string;
  name: string;
  quatity: string;
  price: string;
  label: string;
}

export interface Feedback {
  quote: string;
  name: string;
  title: string;
}

const pages = ["Card Boxs", "Card List", "My Bank"];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [boxCards, setBoxCards] = React.useState<BoxCard[]>([
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/products/decks/st14/img_thumbnail.png",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/products/decks/st14/img_thumbnail.png",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/products/boosters/prb01/img_thumbnail.png",
      name: "UTA OP06-011",
      quatity: "3",
      price: "600k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/products/boosters/op08/img_thumbnail.png",
      name: "KAIDO OP04-044",
      quatity: "3",
      price: "800k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/products/decks/st14/img_thumbnail.png",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/products/decks/st14/img_thumbnail.png",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/products/decks/st14/img_thumbnail.png",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/products/decks/st14/img_thumbnail.png",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/products/decks/st14/img_thumbnail.png",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/products/decks/st14/img_thumbnail.png",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
  ]);

  const [cards, setCards] = React.useState<Card[]>([
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/cardlist/card/OP02-013_p3.png?241115",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/cardlist/card/OP03-112_p4.png?241115",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/cardlist/card/OP07-109_p2.png?241115",
      name: "UTA OP06-011",
      quatity: "3",
      price: "600k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/cardlist/card/OP08-001.png?241115",
      name: "KAIDO OP04-044",
      quatity: "3",
      price: "800k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/cardlist/card/OP08-001_p1.png?241115",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/cardlist/card/OP08-002.png?241115",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/cardlist/card/OP08-002_p1.png?241115",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/cardlist/card/OP08-003.png?241115",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/cardlist/card/OP08-002_p1.png?241115",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
    {
      imgSrc:
        "https://en.onepiece-cardgame.com/images/cardlist/card/OP08-003.png?241115",
      name: "LUFFY OP09-061",
      quatity: "3",
      price: "400k",
      label: "New",
    },
  ]);

  const [feedback, setFeedback] = React.useState<Feedback[]>([
    {
      quote:
        "Bán card uy tín vãi chưỡng. Giá rẻ bất ngờ và mở ra toàn con xịn. Bao huề vốn tới lời tuột quần ... <3",
      name: "Ma bư",
      title: "Chất lượng",
    },
    {
      quote:
        "Bán card uy tín vãi chưỡng. Giá rẻ bất ngờ và mở ra toàn con xịn. Bao huề vốn tới lời tuột quần ... <3",
      name: "Ma bư 1",
      title: "Chất lượng",
    },
    {
      quote:
        "Bán card uy tín vãi chưỡng. Giá rẻ bất ngờ và mở ra toàn con xịn. Bao huề vốn tới lời tuột quần ... <3",
      name: "Ma bư 2",
      title: "Chất lượng",
    },
    {
      quote:
        "Bán card uy tín vãi chưỡng. Giá rẻ bất ngờ và mở ra toàn con xịn. Bao huề vốn tới lời tuột quần ... <3",
      name: "Ma bư 3",
      title: "Chất lượng",
    },
    {
      quote:
        "Bán card uy tín vãi chưỡng. Giá rẻ bất ngờ và mở ra toàn con xịn. Bao huề vốn tới lời tuột quần ... <3",
      name: "Ma bư 4",
      title: "Chất lượng",
    },
  ]);

  const [myBank, setMyBank] = React.useState<string[]>();

  useEffect(() => {
    fetch("https://api.npoint.io/a4013d15581b66468b70")
      .then((res) => res.json())
      .then((data) => {
        const { box_cards, cards, feedback, my_bank } = data;
        setBoxCards(box_cards);
        setCards(cards);
        setFeedback(feedback);
        setMyBank(my_bank);
      });
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={{ background: "white", color: "black" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TUAN ONEPIECE CARD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <a href={`#${page}`}>
                    <Typography sx={{ textAlign: "center", color: "black" }}>
                      {page}
                    </Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TUAN ONEPIECE CARD
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                style={{ color: "black" }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <a href={`#${page}`}>{page}</a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>

      <Container className="container-page" maxWidth="xl">
        <div className="outer-container">
          <div className="inner-container"></div>
        </div>

        <div className="card-container">
          <Typography
            id="Card Boxs"
            variant="h3"
            style={{ color: "black", fontWeight: "bold", margin: "32px" }}
          >
            BOX CARDS
          </Typography>

          <div className="card-list">
            {boxCards &&
              boxCards.map((item, index) => {
                return (
                  <div className="card-item" key={index}>
                    <img src={item.imgSrc} alt="img-card" />
                    <span className="card-label">{item.label}</span>
                    <div className="card-info">
                      <Typography fontWeight={600} variant="h6">
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle1">
                        Số lượng: {item.quatity}
                      </Typography>
                      <Typography
                        fontWeight={600}
                        color="success"
                        variant="body1"
                      >
                        {item.price}
                      </Typography>
                    </div>
                  </div>
                );
              })}
          </div>

          {feedback && feedback.length > 0 && (
            <div className="feedback h-fit rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={feedback}
                direction="right"
                speed="slow"
              />
            </div>
          )}

          <Typography
            id="Card List"
            variant="h3"
            style={{ color: "black", fontWeight: "bold", margin: "32px" }}
          >
            CARD LIST
          </Typography>

          <div className="card-list">
            {cards &&
              cards.map((item, index) => {
                return (
                  <div className="card-item" key={index}>
                    <img
                      className="card-img"
                      src={item.imgSrc}
                      alt="img-card"
                    />
                    <span className="card-label">{item.label}</span>
                    <div className="card-info">
                      <Typography fontWeight={600} variant="h6">
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle1">
                        Số lượng: {item.quatity}
                      </Typography>
                      <Typography
                        fontWeight={600}
                        color="success"
                        variant="body1"
                      >
                        {item.price}
                      </Typography>
                    </div>
                  </div>
                );
              })}
          </div>

          <Typography
            id="My Bank"
            variant="h3"
            style={{ color: "black", fontWeight: "bold", margin: "32px" }}
          >
            MY BANK
          </Typography>

          <div className="my-contact-container">
            {myBank &&
              myBank.map((item, index) => {
                return <img key={index} src={item} alt="" />;
              })}
          </div>
        </div>
      </Container>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" />
        }
        onClick={() =>
          window.open(
            "https://www.facebook.com/profile.php?id=100081458851354",
            "_blank"
          )
        }
      ></SpeedDial>
    </AppBar>
  );
}

export default App;

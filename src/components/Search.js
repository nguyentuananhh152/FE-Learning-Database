import { useEffect, useRef, useState } from "react";
import {
  Container,
  SearchInput,
  IconMagnifyingGlass
} from "./SearchStyle";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}
    >
      <SearchInput ref={targetRef} showSearchInput={showSearchInput} />
      {showSearchInput ? <SearchIcon /> : <IconMagnifyingGlass />}
    </Container>
  );
}

export default Search;

import { IdlAccounts, Idl } from '@wum.bo/anchor';
export const SplWumboIDLJson: Idl = {"version":"0.0.0","name":"spl_wumbo","instructions":[{"name":"initializeWumbo","accounts":[{"name":"wumbo","isMut":true,"isSigner":false},{"name":"tokenMint","isMut":false,"isSigner":false},{"name":"tokenCurve","isMut":false,"isSigner":false},{"name":"nameServiceProgram","isMut":false,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[{"name":"args","type":{"defined":"InitializeWumboArgs"}}]},{"name":"initializeSocialTokenV0","accounts":[{"name":"wumbo","isMut":false,"isSigner":false},{"name":"tokenBonding","isMut":false,"isSigner":false},{"name":"tokenStaking","isMut":false,"isSigner":false},{"name":"tokenRef","isMut":true,"isSigner":false},{"name":"reverseTokenRef","isMut":true,"isSigner":false},{"name":"founderRewardsAccount","isMut":true,"isSigner":false},{"name":"name","isMut":false,"isSigner":false},{"name":"nameOwner","isMut":false,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[{"name":"args","type":{"defined":"InitializeSocialTokenV0Args"}}]}],"accounts":[{"name":"wumbo","type":{"kind":"struct","fields":[{"name":"tokenMint","type":"publicKey"},{"name":"tokenCurve","type":"publicKey"},{"name":"nameServiceProgram","type":"publicKey"},{"name":"bump","type":"u8"}]}},{"name":"tokenRefV0","type":{"kind":"struct","fields":[{"name":"wumbo","type":"publicKey"},{"name":"tokenBonding","type":"publicKey"},{"name":"tokenStaking","type":"publicKey"},{"name":"name","type":{"option":"publicKey"}},{"name":"owner","type":{"option":"publicKey"}},{"name":"bump","type":"u8"}]}}],"types":[{"name":"InitializeWumboArgs","type":{"kind":"struct","fields":[{"name":"bump","type":"u8"}]}},{"name":"InitializeSocialTokenV0Args","type":{"kind":"struct","fields":[{"name":"tokenRefPrefix","type":"string"},{"name":"tokenRefSeed","type":"bytes"},{"name":"tokenRefBump","type":"u8"},{"name":"reverseTokenRefBump","type":"u8"}]}}],"errors":[{"code":300,"name":"InvalidTokenRefPrefix","msg":"Invalid token ref prefix"},{"code":301,"name":"InvalidTokenRefSeed","msg":"Invalid token ref seed"},{"code":302,"name":"InvalidNameProgramId","msg":"Name program id did not match expected for this wumbo instance"},{"code":303,"name":"IncorrectOwner","msg":"Account does not have correct owner!"}]};
export type SplWumboIDL = {"version":"0.0.0","name":"spl_wumbo","instructions":[{"name":"initializeWumbo","accounts":[{"name":"wumbo","isMut":true,"isSigner":false},{"name":"tokenMint","isMut":false,"isSigner":false},{"name":"tokenCurve","isMut":false,"isSigner":false},{"name":"nameServiceProgram","isMut":false,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[{"name":"args","type":{"defined":"InitializeWumboArgs"}}]},{"name":"initializeSocialTokenV0","accounts":[{"name":"wumbo","isMut":false,"isSigner":false},{"name":"tokenBonding","isMut":false,"isSigner":false},{"name":"tokenStaking","isMut":false,"isSigner":false},{"name":"tokenRef","isMut":true,"isSigner":false},{"name":"reverseTokenRef","isMut":true,"isSigner":false},{"name":"founderRewardsAccount","isMut":true,"isSigner":false},{"name":"name","isMut":false,"isSigner":false},{"name":"nameOwner","isMut":false,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[{"name":"args","type":{"defined":"InitializeSocialTokenV0Args"}}]}],"accounts":[{"name":"wumbo","type":{"kind":"struct","fields":[{"name":"tokenMint","type":"publicKey"},{"name":"tokenCurve","type":"publicKey"},{"name":"nameServiceProgram","type":"publicKey"},{"name":"bump","type":"u8"}]}},{"name":"tokenRefV0","type":{"kind":"struct","fields":[{"name":"wumbo","type":"publicKey"},{"name":"tokenBonding","type":"publicKey"},{"name":"tokenStaking","type":"publicKey"},{"name":"name","type":{"option":"publicKey"}},{"name":"owner","type":{"option":"publicKey"}},{"name":"bump","type":"u8"}]}}],"types":[{"name":"InitializeWumboArgs","type":{"kind":"struct","fields":[{"name":"bump","type":"u8"}]}},{"name":"InitializeSocialTokenV0Args","type":{"kind":"struct","fields":[{"name":"tokenRefPrefix","type":"string"},{"name":"tokenRefSeed","type":"bytes"},{"name":"tokenRefBump","type":"u8"},{"name":"reverseTokenRefBump","type":"u8"}]}}],"errors":[{"code":300,"name":"InvalidTokenRefPrefix","msg":"Invalid token ref prefix"},{"code":301,"name":"InvalidTokenRefSeed","msg":"Invalid token ref seed"},{"code":302,"name":"InvalidNameProgramId","msg":"Name program id did not match expected for this wumbo instance"},{"code":303,"name":"IncorrectOwner","msg":"Account does not have correct owner!"}]};



  

export type Wumbo = IdlAccounts<SplWumboIDL>["wumbo"]

export type TokenRefV0 = IdlAccounts<SplWumboIDL>["tokenRefV0"]
  
          